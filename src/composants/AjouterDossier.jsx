import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import { green, red} from '@material-ui/core/colors';
import { withStyles,makeStyles } from "@material-ui/core/styles";

const GreenButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    overrides: {
      Button: {
        raisedPrimary: {
          color: 'white',
        },
      },
    }
  },
}))(Button);

const RedButton = withStyles((theme) => ({
  root: {
    color:'#fff',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#537169');

  const classes = useStyles();

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
          />
          <TextField
            margin="normal"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          </DialogContent>
          <DialogContent>
          <TwitterPicker 
            width="100%" 
            triangle="hide" 
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            color={couleur}
            colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3']}
          />
        </DialogContent>
        <DialogActions>
          <RedButton onClick={()=>{setOuvert(false); viderChamps()}} color="primary">
            Annuler
          </RedButton>
          <GreenButton onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} color="white">
            Ajouter
          </GreenButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}