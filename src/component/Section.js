import React, { Component } from 'react';

class Section extends Component {
    
        
   constructor(props) {
       super(props);
       this.state = {
         trangthai: 0
       }
       
   }
   
   thongbao  = () => {
      alert('Cach xu ly tuong tac trong reacjs');
   }
   thongbao2  = () => {
      alert('chan vai ca loz ra');
   }
  
   thongbao3 = (x) => {
     alert('day la ' + x);
   }
    
  renderButton = () => (
      <div className="row">
        <div name="Thêm" id="" className="btn btn-primary" type="button" onClick={this.editClick}>Thêm</div>
        <div name="Xóa" id="" className="btn btn-warning" type="button" onClick={this.saveClick}>Xóa</div>
      </div>
  )

  renderForm = () => (
        <div className="row">
          <div className="form-group">                   
              <input type="text" className="form" defaultValue={this.props.heading} />
        
          <div className="btn btn-block btn-danger" type="button" onClick={this.saveClick}>Save</div>
         </div>
        </div>
  ) 

  editClick = () => {
    this.setState(
      {
        trangthai:1
      }
    );
  }
  saveClick = () => {
    this.setState(
      {
        trangthai:0
      }
    );
  }

  displayCheck = () => {
    if(this.state.trangthai === 0) {
      return this.renderButton();
    }
    else {
    return this.renderForm();
    }
  }

       render() {
        return (
            <section>
           
                  <div className="p-5">
                    <img className="img-fluid rounded-circle" src= { this.props.image } alt="" />
                  </div>
               
                  <div className="p-5">
                    <h2 className="display-4">{ this.props.heading }</h2>
                    <p>{ this.props.paragraph }</p>
                  </div>
             
                {this.displayCheck()}
          </section>
        );
    } 
}

export default Section;