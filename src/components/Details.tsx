import { Response } from "@/interfaces"

export const Details = ({ success, hostname, time, message, name }: Response) => {
  function renderContent() {
    if (success) {
      return (
        <div className="content success">
          <div>{hostname}</div>
          <div>{time}</div>
        </div>
      )
    } else {
      return (
        <div className="content error">
          <div>OUTAGE</div>
          <div>403</div>
          <div>Forbiden</div>
        </div>
      )
    }
  }
  
  return (
    <section className="details">
      <header>{name}</header>
      <div className={success ? "success" : "error"}>{message}</div>
      {renderContent()}
    </section>
  )
}