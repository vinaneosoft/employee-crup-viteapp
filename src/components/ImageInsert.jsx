
import sunsetImage from '../assets/sunset.jpg';


function ImageInsert(){

    const sunsetfromNet="https://thafd.bing.com/th/id/OIP.TJKSYL1GvBY8-Fo4DJgyZAHaFj?rs=1&pid=ImgDetMain";
    const sunsetLocal="../assets/sunset.jpg";
    return (
        <section>
            <h4>network path of image</h4>
            <img height="200" width="400" src="https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?cs=srgb&dl=art-beach-beautiful-269583.jpg&fm=jpg" alt="sunset"></img>
            <img height="200" width="400" src={sunsetfromNet} alt="sunset"></img>
            <h4>direct local path of image (will not work)</h4>
            <img height="200" width="400" src="../assets/sunset.jpg" alt="sunset"></img>
            <img height="200" width="400" src={sunsetLocal} alt="sunset"></img>
            <h4>image imported from local path (will work)</h4>
            <img height="200" width="400" src={sunsetImage} alt="sunset"></img>
            <h4>require images (to be solved)</h4>
           {/*  <img src={require("../assets/sunset.jpg")}></img> */}
        </section>
    );
}

export default ImageInsert;