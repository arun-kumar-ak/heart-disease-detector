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
          <label>Enter Your Age:</label><br />
          <input id="age-label" value={this.state.age_value} onChange={(Event)=>{this.setState({age_value:Event.target.value})}}></input>
          <input type="range" min="1" className="slider" max="100" step="1" onChange={(Event)=>{this.setState({age_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset className="equal">
          <legend><b>Sex</b></legend>
          <label htmlFor="male" >Male</label>
          <input  type="radio" name="gender" value={1} onChange={(Event)=>{this.setState({sex_value:Event.target.value})}}></input>
          <label htmlFor="female">Female</label>
          <input  type="radio" name="gender" value={0} onChange={(Event)=>{this.setState({sex_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>Chest Pain Type</b></legend>
          <label className="font">              
            0: Typical angina: chest pain related decrease blood supply to the heart<br />
            1: Atypical angina: chest pain not related to heart<br />
            2: Non-anginal pain: typically esophageal spasms (non heart related)<br />
            3: Asymptomatic: chest pain not showing signs of disease<hr /> <br />
          </label>
          <input type="number" value={this.state.cp_value} onChange={(Event)=>{this.setState({cp_value:Event.target.value})}}></input>
          <input type="range" min="0" max="3" step="1" className="slider" onChange={(Event)=>{this.setState({cp_value:Event.target.value})}}></input>
        </fieldset>
        <fieldset>
          <legend><b>Resting Blood Pressure</b></legend>
          <label className="font">
            Resting blood pressure (in mm Hg on admission to the hospital) anything above 130-140 is typically cause for concern.<hr /><br />
            Minimum : 94<br />
            25% : 120<br />
            50% : 130<br />
            75% : 140<br />
            Maximum : 200<hr />
          </label><br />
          <input type="number" value={this.state.trestbps_value} onChange={(Event)=>{this.setState({trestbps_value:Event.target.value})}}></input>
          <input type="range" min="94" className="slider" max="200" step="1" onChange={(Event)=>{this.setState({trestbps_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>Cholestrol</b></legend>
          <label className="font">
            The person’s cholesterol measurement in mg/dl - above 200 is cause for concern.<hr /><br />
            Minimum : 126<br />
            25% : 211<br />
            50% : 240<br />
            75% : 275<br />
            Maximum : 564<hr />
          </label>
          <input value={this.state.chol_value} onChange={(Event)=>{this.setState({chol_value:Event.target.value})}}></input>
          <input className="slider" type="range" min="126" max="564" step="1" onChange={(Event)=>{this.setState({chol_value:Event.target.value})}}></input><br />
        </fieldset>            
        <fieldset className="equal">
          <legend><b>Fasting blood sugar</b></legend>            
          <span /><label htmlFor="fbs_no" >No</label>
          <input  type="radio" name="fbs" value={0} onChange={(Event)=>{this.setState({fbs_value:Event.target.value})}}></input>
          <label htmlFor="fbs_yes">Yes</label>
          <input  type="radio" name="fbs" value={1} onChange={(Event)=>{this.setState({fbs_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>Restecg</b></legend>      
          <label className="font">
            Resting electrocardiographic results:<hr /><br />
            0 : Normal<br />
            1 : having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV)<br />
            2 : showing probable or definite left ventricular hypertrophy by Estes' criteria<hr />
          </label>      
          <input  type="number" value={this.state.restecg_value} onChange={(Event)=>{this.setState({restecg_value:Event.target.value})}}></input>
          <input type="range" className="slider" min="0" max="2" step="1" onChange={(Event)=>{this.setState({restecg_value:Event.target.value})}}></input>
        </fieldset>
        <fieldset>
          <legend><b>Thalach</b></legend>  
          <label>Maximum Heart Rate Achieved.<hr /><br />
            Minimum : 71<br />
            25% : 143<br />
            50% : 153<br />
            75% : 166<br />
            Maximum : 202<hr />
          </label><br />
          <input value={this.state.thalach_value} onChange={(Event)=>{this.setState({thalach_value:Event.target.value})}}></input>
          <input className="slider" type="range" min="71" max="202" step="1" onChange={(Event)=>{this.setState({thalach_value:Event.target.value})}}></input><br />
        </fieldset>      
        <fieldset className="equal">
          <legend><b>Exang</b></legend>     
          <label>
            Exercise induced Angina, which means heart pain produced during exercise due to lack of oxygen supply.<br />
            It feel better when relax.
          </label><hr /><br />
          <span /><label htmlFor="exang_no" >No</label>
          <input  type="radio" name="exang" value={0} onChange={(Event)=>{this.setState({exang_value:Event.target.value})}}></input>
          <label htmlFor="exang_yes">Yes</label>
          <input  type="radio" name="exang" value={1} onChange={(Event)=>{this.setState({exang_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>Oldpeak</b></legend>            
          <label>
            ST depression induced by exercise relative to rest looks at stress of heart during excercise unhealthy heart will stress more.<br />            
          </label><hr /><br />
          <input type="number" value={this.state.oldpeak_value} onChange={(Event)=>{this.setState({oldpeak_value:Event.target.value})}}></input>
          <input className="slider" type="range" min="0" max="6.2" step="0.1" onChange={(Event)=>{this.setState({oldpeak_value:Event.target.value})}}></input><br />
        </fieldset>
        <fieldset>
          <legend><b>Slope</b></legend>     
          <label>
            The slope of the peak exercise ST segment.<hr /><br />
            0 : Upsloping: better heart rate with excercise (uncommon)<br />
            1 : Flatsloping: minimal change (typical healthy heart)<br />            
            2 : Downslopins: signs of unhealthy heart<br />
          </label><hr /><br />
          <input type="number" value={this.state.slope_value} onChange={(Event)=>{this.setState({slope_value:Event.target.value})}}></input>
          <input type="range" className="slider" min="0" max="2" step="1" onChange={(Event)=>{this.setState({slope_value:Event.target.value})}}></input>
        </fieldset>
        <fieldset>
          <legend><b>CA</b></legend>
          <label>
            Number of major vessels (0-3) colored by flourosopy.<hr /><br />
            colored vessel means the doctor can see the blood passing through.<br />
            the more blood movement the better (no clots)
          </label><hr /><br />
          <input  type="number" value={this.state.ca_value} onChange={(Event)=>{this.setState({ca_value:Event.target.value})}}></input>
          <input type="range" className="slider" min="0" max="4" step="1" onChange={(Event)=>{this.setState({ca_value:Event.target.value})}}></input>
        </fieldset>
        <fieldset>
          <legend><b>Thal</b></legend>     
          <label>
            Thalium stress result.<hr /><br />
            (1,3) : normal<br />
            6 : fixed defect: used to be defect but ok now<br />
            7 : reversable defect: no proper blood movement when excercising.
          </label><hr /><br />
          <input  type="number" value={this.state.thal_value} onChange={(Event)=>{this.setState({thal_value:Event.target.value})}}></input>
          <input type="range" className="slider" min="0" max="3" step="1" onChange={(Event)=>{this.setState({thal_value:Event.target.value})}}></input>
        </fieldset>
        <div id="output">
          <span >{this.state.output}</span>
        </div>
        <div>  
          <button id= "button" onClick={this.onsubmitpredict}>Predict</button>          
        </div>        
      </div>
    );
  }
}

export default App;
