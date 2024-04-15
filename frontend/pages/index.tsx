import Link from "next/link";
import { homeWrapper, linkDiv, background } from "@/styles/home";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <section className="page-wrapper" css={homeWrapper}>
      <div css={background}></div>
      <span className="main-heading">Paws And Claws Mitra</span>
      <div css={linkDiv}>
        <Link href="/adoption">
          <Button variant="contained" color="primary">
            Adoption
          </Button>
        </Link>
        <Link href="/listing">
          <Button variant="contained" color="secondary">
            Listing
          </Button>
        </Link>
        <Link href="/takeaction">
          <Button variant="contained" color="primary">
            Take Action (RESCUE)
          </Button>
        </Link>
        <Link href="/health">
          <Button variant="contained" color="secondary">
            Health
          </Button>
        </Link>
        <Link href="/wellness">
          <Button variant="contained" color="primary">
            Wellness
          </Button>
        </Link>
        <Link href="/petfriendly">
          <Button variant="contained" color="secondary">
            Pet Friendly
          </Button>
        </Link>
        <Link href="/shop">
          <Button variant="contained" color="primary">
            Shop
          </Button>
        </Link>
      </div>
    </section>
  );
}
