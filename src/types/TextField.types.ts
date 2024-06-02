export interface TextFieldT {
  placeholdertext: string;
  placeholderTextColor: string;
  style: object;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  secureTextEntry?: boolean;
}
