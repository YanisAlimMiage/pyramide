
import React,{useEffect,useState} from 'react';
import PartAPI from '../service/PartAPI';
import Field from './../component/Field';
import { toast } from 'react-toastify';

const Cnx= (history) => {
  
  const [reponse,setReponse]=useState({
    response:"",
    nb:""
  });
  const [forms,setforms]=useState({
    nom:"",
    nbPart:""
  });
  const handleChange1 =({ currentTarget }) =>{
    const { name, value} = currentTarget;
    setforms({ ...forms, [name]: value });
  };
  const [start ,setStart] = useState(0);
  const [cmpt ,setcompte] = useState(0);
  const [score ,setScore] = useState(0);
  const[result,setResult]=useState(0);
    const [parts ,setParts] = useState([]);
    const [part,setPart]=useState([]);
    const[prop,setProp]=useState([]);
    const [esseye,setEsseye] =useState(0);
   const [nbp,setnbp]=useState(0);
   
    const handleChange =({ currentTarget }) =>{
      const { name, value} = currentTarget;
      setReponse({ ...reponse, [name]: value });
      
      
  };
    const fetchPart= async () => {
      try{
          
      
          const a =Math.floor(Math.random() * Math.floor(17));
          console.log(a);
        const data2 =await PartAPI.findP(a);
        const data =await PartAPI.find(a);
        console.log(data);
        setPart(data);
        setProp(data2);
       
        
  
      }
      catch(error){
        console.log(error.response);
  
      }
      
     }
     useEffect(()=>{
      fetchPart();
      },[]);

    const fetchParts= async () => {
      try{
        
          console.log("bonj");
        const data =await PartAPI.findAll();
        console.log(data);
        setParts(data);
        console.log("bonj");
       
      }
      catch(error){
        console.log(error.response);
  
      }
      
     }
     useEffect(()=>{
      fetchParts();
      },[]);
      const skipe = async event =>{
        if (cmpt<parseInt(forms.nbPart)-1){
        const a =Math.floor(Math.random() * Math.floor(17));
        console.log(a);
      const data2 =await PartAPI.findP(a);
      const data =await PartAPI.find(a);
      console.log(data);
      setPart(data);
      setProp(data2);
      setcompte(cmpt+1)
      setEsseye(0);}
      else{
        toast.success("Bravo partie fini!!!");
        setScore(1)
      }

      }
      const handleSubmit = async event =>{
        event.preventDefault();
      if (reponse.response !==part.response){
        
        toast.warning("mauvaise réponse réessayer");
        setEsseye(esseye+1);
        
        
       
      }
      else{
        setResult(result+1);
        setnbp(nbp+10);
        if (cmpt<parseInt(forms.nbPart)-1){
        toast.success("Bravo Bonne reponse !!!");
        const a =Math.floor(Math.random() * Math.floor(17));
        console.log(a);
      const data2 =await PartAPI.findP(a);
      const data =await PartAPI.find(a);
      console.log(data);
      setPart(data);
      setProp(data2);
      setcompte(cmpt+1)}
      else{
        toast.success("Bravo partie fini!!!");
        setScore(1)
      }
        

        
      }
      
      }
      const handleSubmit1 = async event =>{
        event.preventDefault();
      
      if (forms.nom!="" && forms.nbPart!=""){
        setStart(1);
        
      }
      
      }

    return ( <>
    {start==1 && <div className="entete">
     
     <h1>bienvenue {forms.nom}</h1>
     <h1>Vous avez choisie de jouez {forms.nbPart} parties</h1>
     </div>}
    {score ==0 && <div>
     
    
     {start==0 &&<div className="nom">
     <form onSubmit={handleSubmit1} >
   
        <Field name="nom" 
         type="text" 
         placeholder="nom"
          label ="nom : " 
          onChange={handleChange1} 
          value={forms.nom} 
          />

          <Field name="nbPart" 
         type="text" 
         placeholder="nombre de parties"
          label ="nombre de partie :" 
          onChange={handleChange1} 
          value={forms.nbPart} 
          />
    
   <button className="btn btn-success my-2 my-sm-0" type="submit">Commancé</button>
    </form>
    </div>}
    

     
      <div className="nom">
      {start==1 && <form onSubmit={handleSubmit} >
   
    <Field name="response" 
         type="response" 
         placeholder="response"
          label ="" 
          onChange={handleChange} 
          value={reponse.response} 
          />
         
    <button className="btn btn-success my-2 my-sm-0" type="submit">Virifier</button>
    </form>}

    </div>        


                   <div  className="reponse">
                   {start==1 &&  <ul className="list-group" >
                   <li className="list-group-item">{prop[0]}</li>
                   <li className="list-group-item">{prop[1]}</li>
                   <li className="list-group-item">{prop[2]}</li>
                   {esseye>0 && <li className="list-group-item">{prop[3]}</li>}
                  {esseye>1 && <li className="list-group-item">{prop[4]}</li>}

                   </ul>}
                   {start==1 &&<div className="skip">
                   <button className="btn btn-success my-2 my-sm-0" type="submit" onClick={ () => skipe()}> skip </button>
                   </div>}
                   </div>
                   </div>}
                {score==1 && 
                <div className="final">
                  <h3>Votre resultat est de : {result} / {forms.nbPart}</h3>
                  <h3>votre score est de {nbp}</h3>
                  <h3>votre taux de reussite est de {result * 100 /parseInt(forms.nbPart)} % </h3>

                </div>
                
                
                }
                            
                         

     </> );
}
 
export default Cnx;