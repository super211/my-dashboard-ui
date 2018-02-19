export class InfraSettings{
  public static componentNames = ['tcib', 'core', 'odata', 'interface'];
  
  public static branchName = new Map([
    ['tcib', ['master', 'feature']],
    ['core', ['hotfix', 'feature']],
    ['odata', ['private', 'retail']],
    ['interface', ['feature', 'develop']],
  ]);
}


export class PackageSettings{
  public static componentNames = ['tcib', 'core', 'odata', 'interface'];
  
  public static branchName = new Map([
    ['tcib', ['master', 'feature']],
    ['core', ['hotfix', 'feature']],
    ['odata', ['private', 'retail']],
    ['interface', ['feature', 'develop']],
  ]);
}