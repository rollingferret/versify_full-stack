import React from 'react';


class BirthdayItem extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>What's your date of birth? PLACEHOLDER
                    <select 
                        id="bd-month"
                        value={this.props.monthValue} 
                        onChange={this.props.handleInput('monthValue')}>
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

                <label>
                    <select 
                        id="bd-day"
                        value={this.props.dayValue} 
                        onChange={this.props.handleInput('dayValue')}>
                            <option value="01">01</option>    
                            <option value="02">02</option>    
                            <option value="03">03</option>    
                            <option value="04">04</option>    
                            <option value="05">05</option>    
                            <option value="06">06</option>    
                            <option value="07">07</option>    
                            <option value="08">08</option>    
                            <option value="09">09</option>    
                            <option value="10">10</option>    
                            <option value="11">11</option>    
                            <option value="12">12</option>   
                            <option value="13">13</option>   
                            <option value="14">14</option>   
                            <option value="15">15</option>   
                            <option value="16">16</option>   
                            <option value="17">17</option>   
                            <option value="18">18</option>   
                            <option value="19">19</option>   
                            <option value="20">20</option>   
                            <option value="21">21</option>   
                            <option value="22">22</option>   
                            <option value="23">23</option>   
                            <option value="24">24</option>   
                            <option value="25">25</option>   
                            <option value="26">26</option>   
                            <option value="27">27</option>   
                            <option value="28">28</option>   
                            <option value="29">29</option>   
                            <option value="30">30</option>   
                            <option value="31">31</option>   
                    </select>
                </label>

                <input 
                    type="number"
                    id="bd-year"
                    min="1922"
                    max="2004" 
                    value={this.props.yearValue} 
                    onChange={this.props.handleInput('yearValue')}
                />
            </div>
        )
    }
}

export default BirthdayItem;