export default function Follow() {
  return (
    <>
      <h1>Follow me on ...</h1>

      <social>
        <ul>
          <li>
            <a href="https://www.pinterest.fr/INinaBernard/" target="_blank">
              <img
                src="/pinterest.svg"
                alt="pinterest icon"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <img
                src="/instagram.svg"
                alt="instagram icon"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank">
              <img
                src="/youtube.svg"
                alt="youtube icon"
                width={60}
                height={60}
              />
            </a>
          </li>
        </ul>
      </social>
    </>
  );
}
