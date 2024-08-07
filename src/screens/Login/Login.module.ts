import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  contentImg: {
    alignItems: 'center',
    marginBottom: 25,
  },
  contentLogo: {
    width: 100,
    height: 100,
  },
  contentForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  contentInput: {
    fontSize: 15,
    padding: 15,
    borderWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
  },
  contentButtom: {
    backgroundColor: '#FFFFFF',
    padding: 11,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  contentButtomText: {
    fontSize: 20,
    color: '#021649',
    fontWeight: 'bold',
  },
});

export default styles;
