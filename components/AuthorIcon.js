import Image from "next/image";

export default function AuthorIcon() {
  return (
    <>
      <authoricon>
        <Image src="/nina.webp" alt="author" width={50} height={50} />

        <h5>
          <text>By</text> Nina Bernard <br></br> Dernière mise à jour le, 02
          Avril 2023
        </h5>

        <h5></h5>
      </authoricon>
    </>
  );
}
