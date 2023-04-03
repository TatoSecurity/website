import Image from 'next/image';

const Profile = ({ name, picture, title, blurbs, linkedin}) => {
  if (blurbs == null) blurbs = [];

  return (
    <div>
      <div className="flex items-start">
        <div className="rounded-lg overflow-hidden mr-4">
          <Image src={picture} alt={name} height={390} style={{ objectFit: "cover" }} />
        </div>
        <div className="flex-grow">
          <h2 className="text-3xl font-bold">{name}</h2>
          <h3 className="italic text-xl pb-2">{title}</h3>
          {blurbs.map((blurb) => {
            return (<p key={blurb}> {blurb} </p>)
          })}
        </div>
      </div>
      <div className="pt-2 inline-block">
        <a href={linkedin} className=" text-neutral-800 dark:text-neutral-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Profile;
