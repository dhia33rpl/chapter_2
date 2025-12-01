import { AlertDanger, AlertInfo, AlertSuccess, AlertWarning } from "@/components/alert";


const TestAlert = () => {
   return(
       <div className="m-10">
           <AlertInfo title="Alert Info">
               Ini adalah Alert dengan tipe info
           </AlertInfo>
           <AlertSuccess title="Alert Success">
               Ini adalah alert dengan tipe Success
           </AlertSuccess>
           <AlertWarning title="Alert Warning">
               Ini adalah alert tipe warning
           </AlertWarning>
           <AlertDanger title="Alert Danger">
               Ini adalah alert tipe dangger
           </AlertDanger>
       </div>
   )
}


export default TestAlert;