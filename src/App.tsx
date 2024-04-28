import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostList } from "./Posts";
import { CommentList } from "./Comments";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="my_ressources"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource name="posts" list={PostList} />
    <Resource name="comments" list={CommentList} />
  </Admin>
);
