#include <bits/stdc++.h>
#define ll long long
#define pb push_back
#define mp make_pair
#define sc second
#define fr first
#define fast ios_base::sync_with_stdio(false);
#define  endl "\n"  

using namespace std;
int main()
{
    fast
    cin.tie(NULL);
    cout.tie(NULL);
    cout.precision(15);
    cout << fixed;
    const int mod = 1000000009;
    int t;
    cin >>t;
    while(t--)
    {
        int n;
        cin >>n;
        int ans=INT_MIN,res=-1;

        for(int i=1;i<n;i++)
        {  

          int x=__gcd(i,n)+i;

          if(x>ans)
          {
            ans=x;
            res=i;
          }


        }

        cout <<res<<endl;
    }
   
    return 0;
}