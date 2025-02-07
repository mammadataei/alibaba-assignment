export function ImageGallery() {
  return (
    <div className="mb-8 grid grid-cols-4 gap-2 overflow-hidden rounded-xl">
      <div className="col-span-2 row-span-2 aspect-auto">
        <img
          loading="lazy"
          src="https://random-image-pepebigotes.vercel.app/api/random-image"
          alt="Living Room"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-2 -my-2 grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square">
            <img
              loading="lazy"
              src={`https://random-image-pepebigotes.vercel.app/api/random-image`}
              alt={`Room view ${i}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
