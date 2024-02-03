
export default function Calculator ( { onChange, calculator } ) {
    
    return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>INITIAL INVESTMENT</label>
                <input type="number" 
                required 
                value = {calculator.initialInvestment} 
                onChange = { (event) => 
                    onChange("initialInvestment", event.target.value) }/>
            </p>
            <p>
                <label>ANNUAL INVESTMENT</label>
                <input type="number" 
                required  
                value = {calculator.annualInvestment} 
                onChange = { (event) => 
                    onChange("annualInvestment", event.target.value) }/>
            </p>
            </div>
            <div className="input-group">
            <p>
                <label>EXPECTED RETURN</label>
                <input type="number" 
                required 
                value = {calculator.expectedReturn}  
                onChange = { (event) => 
                    onChange("expectedReturn", event.target.value) }/>
            </p>
            <p>
                <label>DURATION</label>
                <input type="number" 
                required 
                value = {calculator.duration}  
                onChange = { (event) => 
                    onChange("duration", event.target.value) }/>
            </p>
        </div>
    </section>
    );
}