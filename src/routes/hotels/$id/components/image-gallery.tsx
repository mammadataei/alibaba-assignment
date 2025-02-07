export function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="mb-8 grid grid-cols-4 gap-2 overflow-hidden rounded-xl">
      <div className="col-span-2 row-span-2 aspect-auto">
        <img
          loading="lazy"
          src={images[0]}
          alt="Living Room"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-2 -my-2 grid grid-cols-2 gap-2">
        {images.slice(1).map((image) => (
          <div key={image} className="aspect-square">
            <img
              loading="lazy"
              src={image}
              alt={`نمایی از هتل`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
