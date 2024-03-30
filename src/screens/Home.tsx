import { Container } from "@/components/Container"
import { useServicesStatus } from "@/hooks/useServicesStatus"

export const Home = () => {
  const servicesStatus = useServicesStatus()

  return (
    <div className="screen">
      <header>
        <h1>API Services Status</h1>
      </header>
      <Container servicesStatus={servicesStatus} />
    </div>
  )
}
