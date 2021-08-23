const Filter = ({nameFilter, filterHandler}) => {
    return(
        <div>
        filter shown people by name 
        <input value={nameFilter} onChange={filterHandler}></input>
      </div>
    )
}
export default Filter