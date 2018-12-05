// const React = require('react');
// const ReactDOM = require('react-dom');
// const axios = require('axios');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showPage1: true,
      showPage2: false,
      showPage3: false,
      showPage4: false,
      showPage5: false
    }
  }

  passUpPage1State() {
    this.setState({
      showPage1: false,
      showPage2: true
    });
  }

  passUpPage2State() {
    this.setState({
      showPage2: false,
      showPage3: true
    });
  }

  passUpPage3State() {
    this.setState({
      showPage3: false,
      showPage4: true
    });
  }

  passUpPage4State() {
    this.setState({
      showPage4: false,
      showPage5: true
    });
  }

  render () {
    return (
      <div>
        <Step1 page={this.state} cl={this.passUpPage1State.bind(this)}/>
        <Step2 page={this.state} cl={this.passUpPage2State.bind(this)}/>
        <Step3 page={this.state} cl={this.passUpPage3State.bind(this)}/>
        <Step4 page={this.state} cl={this.passUpPage4State.bind(this)}/>
        <Step5 page={this.state} />
      </div>
    );
  }
}

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleForm(params) {
    console.log('I\'m handling it ok?!');
    console.log(this.state);


    axios.post('http://127.0.0.1:3001/p1', {
      username: this.state.name,
      email: this.state.email,
      password: this.state.password,
      createdAt: Date.now
    })
    .then(function(response){
      console.log('success in handleForm --> ', response);
    })
    .catch(function (error){
      console.log('error in handleForm---> ', error);
    });

    this.props.cl();
  }

  continue() {
      this.handleForm();
      //this.handleForm(this.state.name,this.state.email,this.state.password);
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }


  render () {
    {console.log(this.props.page.showPage1)}
    if(this.props.page.showPage1) {
      return (
        <div>
        <h2>Step One</h2>

        <label> Name: &nbsp;
          <input onChange={this.onChangeName.bind(this)} /> <br />
        </label>
        <br />
        <label> Email: &nbsp;
          <input onChange={this.onChangeEmail.bind(this)} /><br /><br />
        </label>

        <label> password: &nbsp;
          <input onChange={this.onChangePassword.bind(this)} /><br />
        </label>


        <br />
        <button onClick={this.continue.bind(this)}>Continue</button>

    </div>
      )
    } else {

      return (
        null
      )
    }
  }

}

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleForm2() {
    console.log('I\'m handling step 2 now');
    console.log(this.state);

    axios.post('http://127.0.0.1:3001/p2', {
        line1: this.state.line1,
        line2: this.state.line2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone: this.state.phone
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    });

    this.props.cl();
  }

  continue2 () {
      this.handleForm2(this.state.line1,this.state.line2,this.state.city,this.state.state,this.state.zip,this.state.phone);
  }

  onChangeLine1 (e) {
    this.setState({
      line1: e.target.value,
    });
  }

  onChangeLine2 (e) {
    this.setState({
      line2: e.target.value,
    });
  }

  onChangeCity (e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeState (e) {
    this.setState({
      state: e.target.value,
    });
  }

  onChangeZip (e) {
    this.setState({
      zip: e.target.value,
    });
  }

  onChangePhone (e) {
    this.setState({
      phone: e.target.value,
    });
  }

  render () {
    {console.log(this.props.page.showPage2)}
    if(this.props.page.showPage2) {
    return (
      <div>
      <h2>Step Two - Address</h2>

      <label> line1: &nbsp;
        <input onChange={this.onChangeLine1.bind(this)} /> <br />
      </label>
      <br />
      <label> line2: &nbsp;
        <input onChange={this.onChangeLine2.bind(this)} /> <br /><br />
      </label>

      <label> city: &nbsp;
        <input onChange={this.onChangeCity.bind(this)} /> <br /><br />
      </label>

      <label> state: &nbsp;
        <input onChange={this.onChangeState.bind(this)} /> <br /><br />
      </label>

      <label> zip: &nbsp;
        <input onChange={this.onChangeZip.bind(this)} /> <br /><br />
      </label>

      <label> phone: &nbsp;
        <input onChange={this.onChangePhone.bind(this)} /> <br /><br />
      </label>
      <br />
      <button onClick={this.continue2.bind(this)}>Continue</button>

  </div>
    )
    } else {

      return (
        null
      )
    }
  }

}

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleForm3() {
    console.log('I\'m handling step 3 now');
    console.log(this.state);

    axios.post('http://127.0.0.1:3001/p3', {
        cc: this.state.cc,
        exp: this.state.exp,
        cvv: this.state.cvv,
        billingZip: this.state.billingZip
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    });

    this.props.cl();
  }


  continue3 () {
      this.handleForm3(this.state.cc,this.state.exp,this.state.cvv,this.state.billingZip);
  }

  onChangeCc (e) {
    this.setState({
      cc: e.target.value,
    });
  }

  onChangeExp (e) {
    this.setState({
      exp: e.target.value,
    });
  }

  onChangeCvv (e) {
    this.setState({
      cvv: e.target.value,
    });
  }

  onChangeBillingZip (e) {
    this.setState({
      billingZip: e.target.value,
    });
  }

  render () {
    {console.log(this.props.page.showPage3)}
    if(this.props.page.showPage3) {
    return (
      <div>
      <h2>Step Three - Credit Card Payment</h2>

      <label> Credit Card #: &nbsp;
        <input onChange={this.onChangeCc.bind(this)} /> <br />
      </label>
      <br />
      <label> Expiration Date: &nbsp;
        <input onChange={this.onChangeExp.bind(this)} /> <br /><br />
      </label>

      <label> CVV: &nbsp;
        <input onChange={this.onChangeCvv.bind(this)} /> <br /><br />
      </label>

      <label> Billing Zipcode: &nbsp;
        <input onChange={this.onChangeBillingZip.bind(this)} /> <br /><br />
      </label>
      <br />
      <button onClick={this.continue3.bind(this)}>Continue</button>

  </div>
    )
    } else {

      return (
        null
      )
    }
  }

}


class Step4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleForm4() {
    console.log('I\'m handling step 4 now');
    console.log(this.state);
    // shove data in db
    //// deliver 3rd page
    this.props.cl();
  }

  continue4 () {
      this.handleForm4();
  }

  // onChangeCc (e) {
  //   this.setState({
  //     cc: e.target.value,
  //   });
  // }

  // onChangeExp (e) {
  //   this.setState({
  //     exp: e.target.value,
  //   });
  // }

  // onChangeCvv (e) {
  //   this.setState({
  //     cvv: e.target.value,
  //   });
  // }

  // onChangeBillingZip (e) {
  //   this.setState({
  //     billingZip: e.target.value,
  //   });
  // }

  render () {
    {console.log(this.props.page.showPage4)}
    if(this.props.page.showPage4) {
    return (
      <div>
      <h2>Step Four - Y'all good? Let's do this!</h2>

      {/* <label> Credit Card #: &nbsp;
        <input onChange={this.onChangeCc.bind(this)} /> <br />
      </label>
      <br />
      <label> Expiration Date: &nbsp;
        <input onChange={this.onChangeExp.bind(this)} /> <br /><br />
      </label>

      <label> CVV: &nbsp;
        <input onChange={this.onChangeCvv.bind(this)} /> <br /><br />
      </label>

      <label> Billing Zipcode: &nbsp;
        <input onChange={this.onChangeBillingZip.bind(this)} /> <br /><br />
      </label> */}
      <br />
      <button onClick={this.continue4.bind(this)}>Complete Your Order, feel that 'post shopping' glow. How far can your glow go? Wait, that's too far. Stop it! I can feel it all the way over here.</button>

  </div>
    )
    } else {

      return (
        null
      )
    }
  }

}

class Step5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleForm5() {
    console.log('I\'m handling step 5 now');
    console.log(this.state);
    // shove data in db
    //// deliver 3rd page
  }

  continue5 () {
      this.handleForm5();
  }

  // onChangeCc (e) {
  //   this.setState({
  //     cc: e.target.value,
  //   });
  // }

  // onChangeExp (e) {
  //   this.setState({
  //     exp: e.target.value,
  //   });
  // }

  // onChangeCvv (e) {
  //   this.setState({
  //     cvv: e.target.value,
  //   });
  // }

  // onChangeBillingZip (e) {
  //   this.setState({
  //     billingZip: e.target.value,
  //   });
  // }

  render () {
    {console.log(this.props.page.showPage5)}
    if(this.props.page.showPage5) {
    return (
      <div>
      <h2>Step Five - You can relax now</h2>

      ** Yay you just went shopping! **
      {/* <label> Credit Card #: &nbsp;
        <input onChange={this.onChangeCc.bind(this)} /> <br />
      </label>
      <br />
      <label> Expiration Date: &nbsp;
        <input onChange={this.onChangeExp.bind(this)} /> <br /><br />
      </label>

      <label> CVV: &nbsp;
        <input onChange={this.onChangeCvv.bind(this)} /> <br /><br />
      </label>

      <label> Billing Zipcode: &nbsp;
        <input onChange={this.onChangeBillingZip.bind(this)} /> <br /><br />
      </label> */}
      <br />
      {/* <button onClick={this.continue4.bind(this)}>Complete Your Order, feel that 'post shopping' glow</button> */}

  </div>
    )
    } else {

      return (
        null
      )
    }
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
