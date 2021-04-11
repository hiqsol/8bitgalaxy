import {getSnapshot} from "mobx-state-tree";
import Layout from "../../components/layouts/Layout";
import Card from "../../components/stores/models/Card";

export default function Cards() {
  const card = Card.create({name: "Test card"});
  console.log(getSnapshot(card));

  return (
    <Layout game>
      {card.draw()}
    </Layout>
  );
}