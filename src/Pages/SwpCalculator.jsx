import React, { useState } from "react";
import "./SwpCalculator.scss";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Seo from "../Component/Seo";

function SwpCalculator() {
    const [investmentPeriod, setInvestmentPeriod] = useState(1);
    const [totalInvestment, setTotalInvestment] = useState(0);
    const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(0);
    const [rateOfReturn, setRateOfReturn] = useState(0);
    const [finalValue, setFinalValue] = useState(null);
    const [totalInterest, setTotalInterest] = useState(null);
    const [totalWithdrawn, setTotalWithdrawn] = useState(null);

    const increasePeriod = () => setInvestmentPeriod((prev) => prev + 1);
    const decreasePeriod = () => setInvestmentPeriod((prev) => Math.max(prev - 1, 1));

    const calculateSWP = () => {
        let remainingAmount = totalInvestment;
        let totalWithdrawals = investmentPeriod * 12;
        let interestEarned = 0;

        for (let i = 0; i < totalWithdrawals; i++) {
            let interest = (remainingAmount * (rateOfReturn / 100)) / 12;
            interestEarned += interest;
            remainingAmount = remainingAmount + interest - monthlyWithdrawal;
            if (remainingAmount < 0) {
                remainingAmount = 0;
                break;
            }
        }

        

        setFinalValue(remainingAmount.toFixed(2));
        setTotalInterest(interestEarned.toFixed(2));
        setTotalWithdrawn((monthlyWithdrawal * totalWithdrawals).toFixed(2));
    };

    return (
        <div className="swpcalculator-container">
            <Seo 
                title="SWP Calculator"
                description="This Systematic Withdrawal Plan calculator easily computes your matured sum as per your monthly withdrawals precisely."
                canonical="Swp-calculator"
                keywords={["trading", "thecaptaltree", "risk management", "strategies"]}
            />
            <Header />
            <main className="main-content-swp">
                <section className="swpcalculator-section">
                    <h1 className="main-heading-swp">SWP Calculator</h1>
                    <div className="swpcalculator-display">

                        <div className="input-row">
                            <div className="input-container">
                                <label htmlFor="totalInvestment">Total Investment</label>
                                <input
                                    type="text"
                                    id="totalInvestment"
                                    value={totalInvestment}
                                    onChange={(e) => setTotalInvestment(parseFloat(e.target.value) || 0)}
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                step="1000"
                                value={totalInvestment}
                                onChange={(e) => setTotalInvestment(parseFloat(e.target.value) || 0)}
                            />
                        </div>

                        <div className="input-row">
                            <div className="input-container">
                                <label htmlFor="monthlyWithdrawal">Monthly Withdrawal</label>
                                <input
                                    type="text"
                                    id="monthlyWithdrawal"
                                    value={monthlyWithdrawal}
                                    onChange={(e) => setMonthlyWithdrawal(parseFloat(e.target.value) || 0)}
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100000"
                                step="500"
                                value={monthlyWithdrawal}
                                onChange={(e) => setMonthlyWithdrawal(parseFloat(e.target.value) || 0)}
                            />
                        </div>

                        <div className="input-row">
                            <div className="input-container">
                                <label htmlFor="rateOfReturn">Expected Rate of Return (%)</label>
                                <input
                                    type="text"
                                    id="rateOfReturn"
                                    value={rateOfReturn}
                                    onChange={(e) => setRateOfReturn(parseFloat(e.target.value) || 0)}
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="50"
                                step="0.1"
                                value={rateOfReturn}
                                onChange={(e) => setRateOfReturn(parseFloat(e.target.value) || 0)}
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="investmentPeriod">Years of Investment</label>
                            <div className="investment-controls">
                                <button className="control-btn" onClick={increasePeriod}>+</button>
                                <button className="control-btn" onClick={decreasePeriod}>-</button>
                                <input type="text" id="investmentPeriod" value={investmentPeriod} readOnly />
                            </div>
                        </div>

                        <div>
                            <button className="calculate" onClick={calculateSWP}>Calculate</button>
                        </div>

                        {finalValue !== null && (
                            <div className="results-container">
                                <div className="result-card">
                                    <div className="result-item">
                                        <span className="result-label">Final Value:</span>
                                        <span className="result-value">₹{finalValue}</span>
                                    </div>
                                    <div className="result-item">
                                        <span className="result-label">Total Interest Earned:</span>
                                        <span className="result-value">₹{totalInterest}</span>
                                    </div>
                                    <div className="result-item">
                                        <span className="result-label">Total Withdrawal:</span>
                                        <span className="result-value">₹{totalWithdrawn}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="circle-design">
                            <button className="display-button">Invest Now</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default SwpCalculator;