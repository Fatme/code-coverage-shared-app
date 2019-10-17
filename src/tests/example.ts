import { AppComponent } from '@src/app/app.component';

describe('app component', () => {
  it('should return 3', () => {
    const appComponent = new AppComponent();
    expect(appComponent.testMethod1(3)).toEqual(3);
  });
});
