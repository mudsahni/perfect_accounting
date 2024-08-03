import ServicePage from "@/components/ServicePage";
import data from '@/data/services/payroll-processing-and-employment-laws.json'

const PayrollProcessingAndEmploymentLaws = () => {
    return (
        <ServicePage title={data.title} description={data.description} />
    )
}
export default PayrollProcessingAndEmploymentLaws