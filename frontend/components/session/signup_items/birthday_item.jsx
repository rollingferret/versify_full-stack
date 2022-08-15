import { React } from "react";

const BirthdayItem = () => (
    <label>What's your date of birth? PLACEHOLDER
    <select name="month" id="month">
        <option selected disabled value>Month</option>    
        <option value="01">January</option>    
        <option value="02">February</option>    
        <option value="03">March</option>    
        <option value="04">April</option>    
        <option value="05">May</option>    
        <option value="06">June</option>    
        <option value="07">July</option>    
        <option value="08">August</option>    
        <option value="09">September</option>    
        <option value="10">October</option>    
        <option value="11">November</option>    
        <option value="12">December</option>   
    </select>
    </label>
)

export default BirthdayItem;