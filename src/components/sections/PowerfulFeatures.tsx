
import '../Styles.css'

const PowerfulFeatures = () => {
  return (
    <section className=" my-[45px] mx-[1rem]">
      <div className="">
        <h2 className="text-3xl font-bold text-center blue_gradient tracking-tighter md:text-4xl lg:text-5xl">
          Powerful Features
        </h2>
        <p className="max-w-[900px] text-center md:w-[65%] pt-3 m-auto w-full text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Our URL shortener and QR code generator offer a range of features to
          help you streamline your content sharing and tracking.
        </p>

        <main className="mt-5 grid gap-5 md:w-[70%] m-auto">
          <div className="grid text-center md:grid-cols-2 md:space-x-5 md:space-y-0 space-y-5 grid-cols-1">
            <div className="border-2 rounded-lg px-5 py-10">
              <h3 className="text-lg font-bold">Customizable Links</h3>
              <p className="text-sm text-muted-foreground">
                Customize your shortened URLs to match your brand and make them
                more memorable.
              </p>
            </div>
            <div className="border-2 rounded-lg text-center px-5 py-10">
              <h3 className="text-lg font-bold">Real-time Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Track clicks, views, and other metrics for your shortened links
                and QR codes.
              </p>
            </div>
          </div>

          <div className="w-full md:flex justify-center itens-center">
            <div className="border-2 rounded-lg py-10 px-5">
            <h3 className="text-lg font-bold text-center">Dynamic Redirects</h3>
            <p className="text-sm text-center text-muted-foreground">
              Easily update the destination of your shortened links without
              changing the URL.
            </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:space-x-5 md:space-y-0 space-y-5 grid-cols-1">
            <div className="border-2 rounded-lg text-center py-10 px-5">
              <h3 className="text-lg font-bold">QR Code Generation</h3>
              <p className="text-sm text-muted-foreground">
                Generate QR codes for your shortened links to make them easy to
                share offline.
              </p>
            </div>
            <div className="border-2 rounded-lg text-center py-10 px-5">
              <h3 className="text-lg font-bold">Branded QR Codes</h3>
              <p className="text-sm text-muted-foreground">
                Customize the appearance of your QR codes with your logo and
                brand colors.
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
