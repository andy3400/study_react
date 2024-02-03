import { useState } from 'react';

import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results( { input }){
    const resultData = calculateInvestmentResults(input);

    return(
        <table id= "result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {/* map을 이용해서 data array를 Jsx 요소로 구성되어 있는 배열로 바꿀 수 있음 */}
                {resultData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return <tr key = {yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}