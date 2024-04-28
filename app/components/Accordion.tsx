const Accordion = () => {
  return (
    <div className="w-3/4 space-y-4">
      <div className="collapse collapse-plus bg-gray-900 text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          what is Netflix
        </div>
        <div className="collapse-content">
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want without a single commercial – all for
            one low monthly price. There is always something new to discover and
            new TV shows and movies are added every week!
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-900 text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How much does Netflix cost?
        </div>
        <div className="collapse-content">
          <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            USD 3.99 to USD 9.99 a month. No extra costs, no contracts.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-900 text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Where can I watch?
        </div>
        <div className="collapse-content">
          <p>
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles. You can also download your favorite shows with
            the iOS, Android, or Windows 10 app. Use downloads to watch while
            you are on the go and without an internet connection. Take Netflix
            with you anywhere.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-900 text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I cancel?
        </div>
        <div className="collapse-content">
          <p>
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-900 text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Where can I watch?
        </div>
        <div className="collapse-content">
          <p>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-900 text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Is Netflix good for kids?
        </div>
        <div className="collapse-content">
          <p>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space. Kids profiles come with PIN-protected parental
            controls that let you restrict the maturity rating of content kids
            can watch and block specific titles you don’t want kids to see.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
