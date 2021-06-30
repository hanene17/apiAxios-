
import axios from 'axios'
import React, {useState , useEffect } from 'react'
import * as ReactBootSTRAP  from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
//import Spinner from 'react-bootstrap/Spinner'
import avatar from '../avatar.jpg'


import './listUser.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const ListUsers = () => {
   
   const[users, setUsers]=  useState([
  ]);
  
  const[loading, setLoading] = useState(false)
  const userLoad =()=>{
    if (loading ==false) {
      return ;
    }
    else if(loading ==(true)){
      return users.filter(el=> {el={el} })
           }
  }
 const funcUser= async() => {
   try {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(res=> { console.log(res);
      setUsers(res.data);});
      setLoading(true)
 
   }
   catch(error){ console.log(error);

   }

 }
 useEffect(() => {
  funcUser() ;
   }, [])
  
   return ( 
      <div>

       


<h1 className='userStyle' style={{paddingLeft:'15rem'}}>List of Users</h1> 

{loading ?  userLoad :<div> <ReactBootSTRAP.Spinner 
        animation="border" 
        style={{ width: '80px',
          height: '80px',
          border: '2px solid #f3f3f3',
          borderTop: '3px solid #f25a41',
          borderRadius: '100%',
          marginLeft:'46rem', 
            
        }}
         >
          </ReactBootSTRAP.Spinner>
          <br/> <br/>
          <h1>Loading ...</h1>
          </div>
         } 
<div className='container-fluid mt-5'>
<div className="row text-center">

     
            {
              users.map((el)=> {
 
return(
  
<div className="col-6 col-md-4 mt-5" style={{marginRight:'auto',
      marginLeft:'auto'}}>
     <div className="card p-1" style={{borderRadius: '5rem',marginRight:'auto',
      marginLeft:'auto',  width: '25rem'}} >
  <Card  key={el.id} className="d-flex align-items-start"
   style={{borderRadius: '5rem', backgroundColor :'hsl(32, 82%, 48%)',color: '#110e09' }}>
  <Card.Img variant="top" style={{width:'15rem' ,marginLeft:'auto',marginRight:'auto'
  ,borderRadius:'89rem', padding:'50px'}} 
   src={avatar} alt="avatar" />
  <Card.Body style={{marginLeft:'2rem', backgroundColor :'black'}}>  
   <Card.Title  className="card border-secondary" style={{display:'flex', 
flexDirection: 'column' ,  justifyContent: 'left', lineHeight: '1em'}}>
    <div>
    <h5 style={{fontWeight: 'bold'}}>name:</h5><p> {el.name}</p> 
    <h5 style={{fontWeight: 'bold'}}>userName:</h5> <p>{el.username}</p> 
    <h5 style={{fontWeight: 'bold'}}>email:</h5> <p>{el.email} </p>
 


    </div>
  
   {/*  */}
        </Card.Title>
        {/*  */}
  
  
    
    <Card.Subtitle className="card border-secondary mb-3 , lineHeight: '1em'"> 
    <h5 style={{fontWeight: 'bold'}}>street_address:</h5> 
 <p>{el.address.street}</p>
 <h5 style={{fontWeight: 'bold'}}>suite_address:</h5> 
   <p>{el.address.suite}</p>  
    <h5 style={{fontWeight: 'bold'}}>city_address:</h5> 
    <p>{el.address.city}</p>  
    <h5 style={{fontWeight: 'bold'}}> zipcode_address:</h5> 
  <p>{el.address.zipcode}</p>  

</Card.Subtitle>
<Card.Subtitle className="card border-secondary mb-3 , lineHeight: '1em'"> 
<h5 style={{fontWeight: 'bold'}}> company_name:</h5> 
<p>{el.company.name}</p>
<h5 style={{fontWeight: 'bold'}}> company_catchPhrase:</h5> 
<p>{el.company.catchPhrase}</p>
<h5 style={{fontWeight: 'bold'}}> company_bs:</h5> 
<p>{el.company.bs}</p> 
</Card.Subtitle>
    
  </Card.Body>
</Card>
</div> </div>
)


})
  }       
        
  
       
        
    </div>
    </div> </div> 
      
     

   )

}


export default ListUsers;
//https://getbootstrap.com/docs/4.0/components/card/