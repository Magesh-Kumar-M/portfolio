export default function Button({props} : any){

    console.log(props)

    return(
        <button >
            {props.name}
        </button>
    )

}