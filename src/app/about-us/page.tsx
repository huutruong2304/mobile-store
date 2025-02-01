export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to Your Phone Store! We are dedicated to providing you with the
        best quality smartphones and accessories. Our journey began in 2010 with
        a simple mission: to make technology accessible and affordable for
        everyone.
      </p>
      <p className="mb-4">
        Over the past decade, we have grown from a small local store to a
        nationwide retailer. Our success is built on our commitment to customer
        satisfaction, innovation, and our unwavering dedication to delivering
        top-notch products and services.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to empower people with the latest technology and
        exceptional service. We strive to bring you the best products from top
        brands at competitive prices. We believe that technology should enhance
        your life, and we are here to make that happen.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          Customer First: We prioritize our customers' needs and satisfaction
          above all.
        </li>
        <li>
          Innovation: We embrace the latest trends and technology to stay ahead.
        </li>
        <li>
          Integrity: We conduct our business with honesty and transparency.
        </li>
        <li>
          Community: We support and give back to the communities we serve.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Our History</h2>
      <p className="mb-4">
        Founded in 2010, Your Phone Store started as a small shop with a big
        dream. With hard work and a relentless focus on customer service, we
        expanded our reach and product offerings. Today, we are proud to be a
        trusted name in the industry, known for our commitment to quality and
        customer care.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        Have questions or need assistance? Feel free to reach out to us at
        <a
          href="mailto:info@yourphonestore.com"
          className="text-blue-500 hover:underline"
        >
          info@yourphonestore.com
        </a>
        . We're here to help!
      </p>
    </div>
  );
}
