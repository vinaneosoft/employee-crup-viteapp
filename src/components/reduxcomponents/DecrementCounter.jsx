import { Button } from "@mui/material";


function DecrementCounter(){
    return(
        <>
        <p>dispatching decrement action on store</p>
        <Button variant="contained">DECREMENT</Button>
        </>
    );
}

export default DecrementCounter;