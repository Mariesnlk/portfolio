import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlockEmpty from "../components/ContainerBlockEmpty";
import getLatestRepos from "@lib/getLatestRepos";
import TrickyTriangle from "../components/TrickyTriangle";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlockEmpty title="Mariia Synelnyk - Blockchain Developer">
      <TrickyTriangle />
    </ContainerBlockEmpty>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
