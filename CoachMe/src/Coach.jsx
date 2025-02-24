function Coach({name, location, rate, tagline}) {
  return (
    <div>
        <p>Welcome to the coaching session! How can I assist you today?</p>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Rate: {rate}</p>
        <p>Tagline: {tagline}</p>
    </div>
  )
}

export default function CoachArray() {
    return (
        <div>
            <Coach name="John Doe" location="New York" rate="$100/hour" tagline="Your personal coach for success!" />
            <Coach name="Jane Smith" location="Los Angeles" rate="$150/hour" tagline="Empowering you to reach your goals!" />
            <Coach name="Mike Johnson" location="Chicago" rate="$120/hour" tagline="Guiding you towards greatness!" />
        </div>
    )
}