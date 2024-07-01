export interface Profile {
  fullName: string;
  workPosition: string;
  email: string;
  birthDate: string;
  profileImage?: string | null | undefined;
  githubLink?: string | undefined;
  linkedInLink?: string | undefined;
  cvDownloadLink?: string | undefined;
  cellPhone?: string | undefined;
  address?: string | undefined;
}
