import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  contentImg: {
    alignItems: 'center',
    marginBottom: 25,
  },
  contentLogo: {
    width: 100,
    height: 100,
  },
  contentOption: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  contentText: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentButtom: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 20,
    borderRadius: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contentIcon: {
    width: 35,
  },
  contentButtomText: {
    fontSize: 17,
    color: '#021649',
    fontWeight: 'bold',
  },
});

export default styles;
