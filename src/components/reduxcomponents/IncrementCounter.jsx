import { Button } from "@mui/material";


function IncrementCounter(){

    return(
         <>
        <p>dispatching increment action on store</p>
        <Button variant="contained">INCREMENT</Button>
        </>
    );
}

export default IncrementCounter;