import { Response } from "@/interfaces"
import { Details } from "@/components/Details"

export const Container = ({ servicesStatus }: { servicesStatus: Response[]}) => {
  return (
    <ul className="container">
      {servicesStatus.map((status, i) => (
        <Details key={i} {...status} />
      ))}
    </ul>
  )
}