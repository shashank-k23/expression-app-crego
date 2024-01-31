import Form from 'react-bootstrap/Form';
import { useState, useRef, useEffect, useReducer } from "react";
import { Button } from 'react-bootstrap'
let arr=[];
function SelectBasicExample() {


const [message, setMessage] = useState("")
const [selectedValue1, setSelectedValue1] = useState('')
const [selectedValue2, setSelectedValue2] = useState('')
const [selectedValue3, setSelectedValue3] = useState('')
const [selectedValue4, setSelectedValue4] = useState('')

let combinator="";
let key='';
let ager=0;
let cscore='';
let abal=0;

const handleChange = (e) => {
  setMessage(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  combinator = message
  arr.push(combinator);


}

const handleReset = () => {
  setMessage("")
}




const handleChange1 = (e) => {
  setSelectedValue1(e.target.value)
  key = e.target.value
  arr.push(key);

}

const clearDropdown1 = () => {
  setSelectedValue1('')
}

const handleChange2 = (e) => {
  setSelectedValue2(e.target.value)
  ager = e.target.value

  arr.push(ager);
}

const clearDropdown2 = () => {
  setSelectedValue2('')
}

const handleChange3 = (e) => {
  setSelectedValue3(e.target.value)
  const cscore = e.target.value
  arr.push(cscore);

}

const clearDropdown3 = () => {
  setSelectedValue3('')
}

const handleChange4 = (e) => {
  setSelectedValue4(e.target.value)
  const abal = e.target.value
  arr.push(abal);

 
}

const clearDropdown4 = () => {
  setSelectedValue4('')
}

const handleClick = (event, keyValue) => {
  event.preventDefault();
  console.log("your selected key is:",arr[1]);
  console.log(arr);
  console.log("--------------------------");
  if(arr[1] ==='credit score')
  {
    if (arr[4]==='poor' || arr[4]==='low')
    {
      console.log("your score is: 250")
    }
    else
    {
      console.log("your score is: 400")
    }
  }
  else{
    if (abal===10 || abal===50 || abal=== 100)
    {
      console.log("your score is: 200")
    }
    else
    {
      console.log("your score is: 300")
    }
    }

  console.log("combinator:",arr[0])
 };


  
 return (
    <>

            <nav>

            <div className='nav-container'>
              <img src='https://cdn.iconfinder.com/data/family/previews/preview/font-awesome-regular.png?indexed=1702899910'
              width="50" height="60"  ></img>
                  
                    <h1 className='hh'>CREGO ASSSIGNMENT</h1>
                  </div>


            </nav>


            <form onSubmit={handleSubmit} id="myForm">
<div className="msg">
  <h5>Input the connector type:</h5>
  <textarea placeholder="Message" onChange={handleChange} value={message} className='text'/>
</div>
      <button type="submit">Submit</button>
      <button onClick={handleReset}>Reset</button>
    </form>


<div className="container">
<form id="all-forms-form">
      <h3 className='heading'>Choose your key value:</h3>
      <Form.Select
        aria-label="Default select example"
        value={selectedValue1}
        onChange={handleChange1}
      >
       
        <option value="">Choose your KEY VALUE</option>
        <option value="credit score">CREDIT-SCORE</option>
        <option value="account balance">ACCOUNT BALANCE</option>
      </Form.Select>
      
      <Button className="norris" onClick={clearDropdown1 }>Clear Dropdown</Button>

    
    <br/>
    <br/>


<Form.Select
        aria-label="Default select example"
        value={selectedValue2}
        onChange={handleChange2}
      >
       
  <option>Choose the AGE</option>
      <option value="01">1</option>
        <option value="02">2</option>
        <option value="03">3</option>
        <option value="04">4</option>
        <option value="05">5</option>
        <option value="06">6</option>
        <option value="07">7</option>
        <option value="08">8</option>
        <option value="09">9</option>
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
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        <option value="46">46</option>
        <option value="47">47</option>
        <option value="48">48</option>
        <option value="49">49</option>
        <option value="50">50</option>
        <option value="51">51</option>
        <option value="52">52</option>
        <option value="53">53</option>
        <option value="54">54</option>
        <option value="55">55</option>
        <option value="56">56</option>
        <option value="57">57</option>
        <option value="58">58</option>
        <option value="59">59</option>
        <option value="60">60</option>
        <option value="61">61</option>
        <option value="62">62</option>
        <option value="63">63</option>
        <option value="64">64</option>
        <option value="65">65</option>
        <option value="66">66</option>
        <option value="67">67</option>
        <option value="68">68</option>
        <option value="69">69</option>
        <option value="70">70</option>
        <option value="71">71</option>
        <option value="72">72</option>
        <option value="73">73</option>
        <option value="74">74</option>
        <option value="75">75</option>
        <option value="76">76</option>
        <option value="77">77</option>
        <option value="78">78</option>
        <option value="79">79</option>
        <option value="80">80</option>
        <option value="81">81</option>
        <option value="82">82</option>
        <option value="83">83</option>
        <option value="84">84</option>
        <option value="85">85</option>
        <option value="86">86</option>
        <option value="87">87</option>
        <option value="88">88</option>
        <option value="89">89</option>
        <option value="90">90</option>
        <option value="91">91</option>
        <option value="92">92</option>
        <option value="93">93</option>
        <option value="94">94</option>
        <option value="95">95</option>
        <option value="96">96</option>
        <option value="97">97</option>
        <option value="98">98</option>
        <option value="99">99</option>
        <option value="99">99</option>
        <option value="99">99</option>
        <option value="100">100</option>
        

      </Form.Select>
      
      <Button className="norris" onClick={clearDropdown2}>Clear Dropdown</Button>
    
      <br/>
    <br/>

        
        <Form.Select
          aria-label="Default select example"
          value={selectedValue3}
          onChange={handleChange3}
        >
  
    <option> ENTER THE CREDIT SCORE</option>
        <option value="poor">300-600</option>
        <option value="low">601-660</option>
        <option value="good">661-780</option>
        <option value="excellent">781-850</option>
  
  
        </Form.Select>
        <Button className="norris" onClick={clearDropdown3}>Clear Dropdown</Button>
      

        <br/>
        <br/>

<Form.Select
        aria-label="Default select example"
        value={selectedValue4}
        onChange={handleChange4}
      >

  <option>ENTER YOUR BANK BALANCE</option>
      <option value="10">LESS THAN 10K</option>
      <option value="50"> GREATER THAN 10K BUT LESS THAN 50K</option>
      <option value="100">GREATER THAN 50K BUT LESS THAN 1L</option>
      <option value="500">GREATER THAN 1L BUT LESS THAN 5L</option>
      <option value="1000">GREATER THAN 5L</option> 


   </Form.Select>
   
      <Button className="norris" onClick={clearDropdown4}>Clear Dropdown</Button>
  <br/>
  <br/>
   <button className='rainbow-button' onClick={(e) => handleClick(e, key.value)}>Get Score</button>
</form>
</div>
    </>
  );
}


export default SelectBasicExample;

