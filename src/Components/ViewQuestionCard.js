import React, { useState, useEffect } from "react";
import {
  Grid,
  styled,
  Box,
  Paper,
  Switch,
  TextField,
  Button,
} from "@material-ui/core";
import 'font-awesome/css/font-awesome.min.css';

let temp = [];
let switchResponse = [];

const ViewQuestionCard = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "left",
    color: theme.palette.text.primary,
    padding: "10px 20px 20px 10px",
  }));
  const [commentsResponse, setCommentsResponse] = useState([]);
  const [switchesResponse, setSwitchsResponse] = useState([]);
  const [commentsInitialResponse, setInitialCommentsResponse] = useState([]);
  const [switchesInitialResponse, setSwitchsInitialResponse] = useState([]);
  const [disableValue, setDisableValue] = useState(true);
  const [fileChoose, setFileChosed] = useState([]);
  

  

  const handleChange = (id, newObject) => {
    
  };

  const handleSwitchChange = (e, id, value) => {
    
  };

  const disableSubmit = () => {
   
  };

  const submitQuestions=()=>{
    let payloadChunk={}
    let payload=[]
    let today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
    for(let i=0;i<switchResponse.length;i++){
      payloadChunk={
        "mapping_id": props.selectedMapping.mapping_id,
        "country_id": props.selectedMapping.country_id,
        "user_id": props.selectedMapping.user_id,
        "control_id": props.selectedMapping.control_id,
        "task_no": props.questionSets[i].taskno,
        "response_no": props.selectedMapping.country_id+props.selectedMapping.control_id,
        "response_description": switchResponse[i]?"Yes":"No",
        "control_owner_response_comment": temp[i].comments,
        "mgr_id": "M_3",
        "response_date": today.toISOString(),
        "executing_month": props.selectedMapping.executing_month,
        "executing_year": props.selectedMapping.executing_year,
        "last_updated_by": props.selectedMapping.user_id,
        "last_updated_date": props.questionSets[i].last_updated_date
    }
      payload.push(payloadChunk)
    }
    fetch('https://egrc.azurewebsites.net/api/transaction/',{
      method: 'POST',
      headers: {
        email: "Sajith.K@unilever.com",
        token: 'test',
        'Content-Type': 'application/json'
      },body: JSON.stringify(payload)}).then(res=>res.json()).catch(e=>console.log(e));
      clearAllResponses();
  }

  const clearAllResponses = () => {
    let tempSwitch=[]
    let tempComment=[]
    for(let i=0;i<=switchResponse.length;i++){
      tempSwitch.push(true);
      tempComment.push({"comments":""});
    }
    setCommentsResponse(tempComment);
    setSwitchsResponse(tempSwitch);
    switchResponse=tempSwitch;
    temp=tempComment;
    setFileChosed([]);
  };
  
  const readFile=(e)=>{
    e.preventDefault();
    const files=e.target.files;
    let uploads=[...fileChoose];
    for(let i=0;i<files.length;i++){
      uploads.push(files[i].name);
    }
   setFileChosed(uploads);
  }

  const deleteFile=(deleteFile)=>{
    //e.preventDefault();
    let uploads=[...fileChoose];
    for(let i=0;i<uploads.length;i++){
      if(deleteFile==uploads[i]){
        uploads.splice(i, 1);
      }
    }
   setFileChosed(uploads);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
      <Item
            elevation={0}
            style={{ fontSize: "18px", padding: "3px", color:"#FF0000" }}
          >
            <ul>
              Info:
             <li>Please attach the supporting documents if all responses are “Yes”</li>
             <li>Please provide comment if the response is “No”</li>
          </ul> 
          </Item>
      </Grid>
      
      <Grid item xs={12}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "grid",
            gap: 2,
          }}
        >
          {props&&props.questionSets &&
            props.questionSets.map((q) => (
              <Item
                key={1}
                elevation={20}
                style={{ fontSize: "18px", marginBottom: "20px" }}
              >
                <Grid xs={12} className="mb-1">
                  {`Q${q.question_id}. ${q.question_description}`}
                </Grid>
                <Grid xs={12} className="mb-1">
                  No{" "}
                  <Switch
                    color={"primary"}
                    checked={switchResponse[q.question_id-1]}
                    onChange={(e) =>
                      handleSwitchChange(e, q.question_id - 1, e.target.checked)
                    }
                  />{" "}
                  Yes
                </Grid>
                
                <Grid xs={12} className="mt-1">
                {switchResponse && !switchResponse[q.question_id-1] && <TextField
                    id="standard-basic"
                    label="Comment"
                    variant="outlined"
                    fullWidth
                    value={temp[q.question_id-1]?temp[q.question_id-1].comments:""}
                    onChange={(e) =>{
                      handleChange(q.question_id - 1, {
                        comments: e.target.value,
                      });
                      e.target.focus()
                    }}
                  />}
                </Grid>
              </Item>
            ))}
          <Item
            key={1}
            elevation={0}
            style={{ fontSize: "18px", marginBottom: "20px" }}
          >
            
            <Grid xs={2} className="mt-3 ">
              <input
                type="file"
                id="img"
                style={{
                  backgroundColor: "white",
                  border: "0px",
                  marginLeft: "-10px",
                  width: "90%",
                  cursor: "pointer",
                  display: "none"
                }}
                onChange={(e)=>readFile(e)}
                multiple={true}
              />
              <Button variant="contained" color="primary"><label for="img">Upload Doc</label></Button>
            </Grid>
            <Grid xs={6} className="mt-1 float-right">
              <Button
                variant="contained"
                disabled={disableSubmit()}
                onClick={submitQuestions}
                style={
                  disableValue
                    ? { margin: "10px" }
                    : {
                        backgroundColor: "limegreen",
                        margin: "10px",
                        color: "white",
                      }
                }
              >
                Submit
              </Button>
              <Button variant="contained" onClick={clearAllResponses}>
                Reset
              </Button>
            </Grid>
            <Grid xs={5} className="mt-1">
              {fileChoose && fileChoose.map((file)=><Grid container spacing={2}>
  <Grid item xs={8}>
    <Item title={file}>{file}</Item>
  </Grid>
  <Grid item xs={1} onClick={()=>deleteFile(file)}>
    <Item title="Delete" style={{"backgroundColor":"#FF0000","cursor":"pointer","color":"white"}}>X</Item>
  </Grid></Grid>)}
            </Grid>
            
          </Item>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ViewQuestionCard;
