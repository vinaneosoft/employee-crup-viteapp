

function AuthGuard(props){

    // control over children whether to render it or not
    // cookie for admin if present : render child
    // else navigate to login form

    return (
        <>
        {props.children}
        </>
    );
}

export default AuthGuard;