
import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const InvestmentCalculator = () => {
  const [investment, setInvestment] = useState(1000);
  const [monthlyReturn, setMonthlyReturn] = useState(0);
  const [annualReturn, setAnnualReturn] = useState(0);
  const [freeTokens, setFreeTokens] = useState(0);

  // Calculate returns whenever investment amount changes
  useEffect(() => {
    // 15% monthly return
    const monthlyReturnAmount = investment * 0.15;
    setMonthlyReturn(monthlyReturnAmount);
    
    // Annual return (15% x 12 months)
    setAnnualReturn(monthlyReturnAmount * 12);
    
    // Free WYSE Tokens (10x investment)
    setFreeTokens(investment * 10);
  }, [investment]);

  // Handle investment input change
  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      // Cap investment between 100 and 200000 USDT
      const capped = Math.max(100, Math.min(200000, value));
      setInvestment(capped);
    } else {
      setInvestment(0);
    }
  };

  return (
    <div className="bg-wyse-darkblue rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Calculator className="h-7 w-7 text-wyse-accent mr-3" />
        <h3 className="text-2xl font-bold text-white">Investment Calculator</h3>
      </div>
      
      <div className="mb-8">
        <label htmlFor="investment" className="block text-wyse-lightblue mb-2 font-medium">
          Investment Amount (USDT)
        </label>
        <input
          id="investment"
          type="number"
          min="100"
          max="200000"
          value={investment}
          onChange={handleInvestmentChange}
          className="w-full py-3 px-4 bg-wyse-dark/40 border border-wyse-light/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-wyse-light focus:border-transparent"
        />
        <div className="flex justify-between mt-2">
          <span className="text-xs text-wyse-lightblue">Min: 100 USDT</span>
          <span className="text-xs text-wyse-lightblue">Max: 200,000 USDT</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gradient-to-br from-wyse-accent/20 to-wyse-accent/5 border-wyse-accent/30 rounded-lg">
          <p className="text-wyse-lightblue mb-1">Monthly Return:</p>
          <p className="text-xl font-bold text-wyse-accent">{monthlyReturn.toFixed(2)} USDT</p>
          <p className="text-xs text-wyse-lightblue/70 mt-1">15% of your investment</p>
        </div>
        
        <div className="p-4 bg-gradient-to-br from-wyse-light/20 to-wyse-light/5 border-wyse-light/30 rounded-lg">
          <p className="text-wyse-lightblue mb-1">Annual Return:</p>
          <p className="text-xl font-bold text-wyse-light">{annualReturn.toFixed(2)} USDT</p>
          <p className="text-xs text-wyse-lightblue/70 mt-1">{((annualReturn / investment) * 100).toFixed(0)}% of your investment</p>
        </div>
        
        <div className="p-4 bg-gradient-to-br from-wyse-cyan/20 to-wyse-cyan/5 border-wyse-cyan/30 rounded-lg">
          <p className="text-wyse-lightblue mb-1">Free WYSE Tokens:</p>
          <p className="text-xl font-bold text-wyse-cyan">{freeTokens.toLocaleString()} WYSE</p>
          <p className="text-xs text-wyse-lightblue/70 mt-1">10X your investment amount</p>
        </div>
      </div>
      
      <div className="mt-6 p-4 border border-wyse-light/20 rounded-lg bg-wyse-dark/30">
        <p className="text-sm text-wyse-lightblue">
          <span className="font-bold text-wyse-light">Important:</span> The calculator provides estimated returns based on the WYSE Liquidity Pool program. Actual returns may vary based on market conditions and token performance.
        </p>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
