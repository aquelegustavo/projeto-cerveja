import React from "react";
import { styled } from "@material-ui/core/styles";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingComponent from "../../components/loading";
import {
  Alert,
  Button,
  Card,
  Divider,
  Icon,
  IconButton,
} from "@material-ui/core";

import styles from "./profile.module.scss";

type User = {
  picture: string;
  name: string;
  email: string;
  nickname: string;
};

type UseAuth0 = {
  user?: User;
  isAuthenticated: boolean;
  isLoading: boolean;
};

const Input = styled("input")({
  display: "none",
});

const Profile = () => {
  const { user, isLoading }: UseAuth0 = useAuth0();

  if (isLoading) {
    return <LoadingComponent />;
  }

  console.log("User: ", user);

  return (
    <>
      <Alert severity="warning">
        Não é possível editar nenhuma informação no momento.
      </Alert>

      <Card className={`${styles.card} ${styles.userInfo}`}>
        <section className="box flex row">
          <div className={styles.imageContainer}>
            <img src={user?.picture} alt={user?.name} />

            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />

              <IconButton
                className={styles.editButton}
                aria-label="Alterar foto de perfil"
                color="primary"
                size="small"
                component="span"
              >
                <Icon>edit</Icon>
              </IconButton>
            </label>
          </div>
          <div>
            <h2>{user?.name}</h2>
            <p>{user?.nickname}</p>
          </div>
        </section>
        <section className={styles.userData}>
          <div className={styles.item}>
            <h3>Email</h3>
            <div className="box flex row">
              <p>{user?.email}</p>
              <Button>Editar</Button>
            </div>
          </div>
          <div className={styles.item}>
            <h3>Telefone</h3>
            <div className="box flex row">
              <p>(19) 98191-9535</p>
              <Button>Editar</Button>
            </div>
          </div>
        </section>
      </Card>

      <Card className={`${styles.card} ${styles.security}`}>
        <h2>Segurança</h2>
        <div className="box flex row">
          <div className={styles.imageContainer}>
            <img src="image/security.svg" alt="Segurança" />
          </div>
          <div className={styles.informations}>
            <div className={styles.item}>
              <Button variant="outlined" color="error">
                Alterar senha
              </Button>
            </div>
            <Divider />
            <div className={`${styles.item} ${styles.v2e}`}>
              <h4>Autentificação em duas etapas</h4>
              <p>
                A verificação em duas etapas é uma forma de reforçar a segurança
                da sua conta, garantindo que só você tenha acesso a ela.
              </p>
              <Button className={styles.activeButton} variant="contained">
                Ativar
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <h1>teste</h1>,
});
