import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super();
    this.state= {
      age_value: '',
      sex_value: '',
      cp_value: '',
      trestbps_value : '',
      chol_value: '',
      fbs_value: '',
      restecg_value: '',
      thalach_value: '',
      exang_value: '',
      oldpeak_value: '',
      slope_value: '',
      ca_value: '',
      thal_value: '',
      output: ''
    }
    
  }

  onsubmitpredict = () => {
    fetch('https://flask-server-fs.herokuapp.com/predict',{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            age: this.state.age_value,
            sex: this.state.sex_value,
            cp: this.state.cp_value,
            trestbps: this.state.trestbps_value,            
            chol: this.state.chol_value,
            fbs: this.state.fbs_value,
            restecg: this.state.restecg_value,
            thalach: this.state.thalach_value,
            exang: this.state.exang_value,
            oldpeak: this.state.oldpeak_value,
            slope: this.state.slope_value,
            ca: this.state.ca_value,
            thal: this.state.thal_value
        })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({output: data})        
    })
  }

  componentDidMount() {
    fetch('https://flask-server-fs.herokuapp.com/')
        .then(Response => Response.json())
        .then(console.log)
  }


  render() {
    return (
      <div className="App">
        <h1>HEART DISEASE DETECTOR</h1>
        <fieldset>
          <legend><b>Age</b></legend>
          <input placeholder="ENTER YOUR AGE" onChange={(Event)=>{this.setState({age_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>Sex</b></legend>
          <label htmlFor="male" >Male</label>
          <input  type="radio" name="gender" value={1} onChange={(Event)=>{this.setState({sex_value:Event.target.value})}}></input>
          <label htmlFor="female">Female</label>
          <input  type="radio" name="gender" value={0} onChange={(Event)=>{this.setState({sex_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>Chest Pain Type</b></legend>
          <label>              
            <span />0: Typical angina: chest pain related decrease blood supply to the heart<br />
            <span />1: Atypical angina: chest pain not related to heart<br />
            <span />2: Non-anginal pain: typically esophageal spasms (non heart related)<br />
            <span />3: Asymptomatic: chest pain not showing signs of disease <br />
          </label>
          <input placeholder="ENTER A NUMBER" type="number" min="0" max="3" step="1" onChange={(Event)=>{this.setState({cp_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>trestbps</b></legend>
          <input value={this.state.trestbps_value} onChange={(Event)=>{this.setState({trestbps_value:Event.target.value})}}></input>
          <input type="range" min="94" max="200" step="1" onChange={(Event)=>{this.setState({trestbps_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>cholestrol</b></legend>
          <input value={this.state.chol_value} onChange={(Event)=>{this.setState({chol_value:Event.target.value})}}></input>
          <input type="range" min="126" max="564" step="1" onChange={(Event)=>{this.setState({chol_value:Event.target.value})}}></input><br />
        </fieldset>            
        <fieldset>
          <legend><b>fasting blood sugar</b></legend>            
          <span /><label htmlFor="fbs_no" >No</label>
          <input  type="radio" name="fbs" value={0} onChange={(Event)=>{this.setState({fbs_value:Event.target.value})}}></input>
          <label htmlFor="fbs_yes">Yes</label>
          <input  type="radio" name="fbs" value={1} onChange={(Event)=>{this.setState({fbs_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>restecg</b></legend>            
          <input  type="number" min="0" max="2" step="1" onChange={(Event)=>{this.setState({restecg_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>thalach</b></legend>            
          <input value={this.state.thalach_value} onChange={(Event)=>{this.setState({thalach_value:Event.target.value})}}></input>
          <input type="range" min="71" max="202" step="1" onChange={(Event)=>{this.setState({thalach_value:Event.target.value})}}></input><br />
        </fieldset>      
        <fieldset>
          <legend><b>exang</b></legend>          
          <span /><label htmlFor="exang_no" >No</label>
          <input  type="radio" name="exang" value={0} onChange={(Event)=>{this.setState({exang_value:Event.target.value})}}></input>
          <label htmlFor="exang_yes">Yes</label>
          <input  type="radio" name="exang" value={1} onChange={(Event)=>{this.setState({exang_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>Oldpeak</b></legend>            
          <input value={this.state.oldpeak_value} onChange={(Event)=>{this.setState({oldpeak_value:Event.target.value})}}></input>
          <input type="range" min="0" max="6.2" step="0.2" onChange={(Event)=>{this.setState({oldpeak_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>slope</b></legend>            
          <input  type="number" min="0" max="2" step="1" onChange={(Event)=>{this.setState({slope_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>ca</b></legend>            
          <input  type="number" min="0" max="4" step="1" onChange={(Event)=>{this.setState({ca_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>thal</b></legend>            
          <input  type="number" min="0" max="3" step="1" onChange={(Event)=>{this.setState({thal_value:Event.target.value})}}></input><br />
        </fieldset>
        <div className= "button">  
          <button onClick={this.onsubmitpredict}>Predict</button>          
        </div>
        <div id="output">
          <span >{this.state.output}</span>
        </div>
      </div>
    );
  }
}

export default App;
