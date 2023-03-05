import { useContext } from "react";
import { DataContext } from "../Contexts/DataProvider";

/**
 * * Created custom hook, it calls when the consumer want to consume data 
 */
const useGlobalData = () => useContext(DataContext);

export default useGlobalData;
