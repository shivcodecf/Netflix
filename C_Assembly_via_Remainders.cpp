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
        vector<ll>v(n-1);
        ll maxi=-1;

        for(ll i=0;i<n-1;i++)
        {
            cin >>v[i];
            maxi=max(maxi,v[i]);
        }
        vector<ll>v1;

        v1.push_back(maxi+1);
        ll x=v1[0];

        ll y=0;

        for(ll i=1;i<n;i++)
        {
             y= x+v[i-1];
            v1.push_back(y);
            x=v1[i];
        }
        
        


        for(ll i=0;i<n;i++)
        {
            cout <<v1[i]<<" ";
        }
        cout <<endl;
    }
    
   
    return 0;
}