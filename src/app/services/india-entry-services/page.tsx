import ServicePage from "@/components/ServicePage";
import data from '@/data/services/india-entry-service.json'

const IndiaEntryServicesPage = () => {
    return (
        <ServicePage title={data.title} description={data.description} />
    )
}
export default IndiaEntryServicesPage