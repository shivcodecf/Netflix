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
        ll n;
        cin >>n;

        vector<ll>v(n),v1(n);

        for(ll i=0;i<n;i++)
        {
            cin >>v[i];
        }
        for(ll i=0;i<n;i++)
        {
            cin >>v1[i];
        }
        ll ans=0;
        
        for(ll i=0;i<n;i++)
        {
          if(v[i]>v1[i])
          {
            ans++;
            v.push_back(v1[i]);
            sort(v.begin(),v.end());
          }

        }
        cout <<ans<<endl;
    }
   
    return 0;
}