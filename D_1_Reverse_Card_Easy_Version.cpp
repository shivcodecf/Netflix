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

     ll t;
    cin >> t;
    while (t--) {
        ll n, m,ans=0;
       cin >> n >> m;
    
    for (ll i = 1; i <= m; i++) {

        ll temp = ceil((n + i) / i); 
        ans += temp / i;        
        
       
    }

    ans--;

    cout << ans <<endl; 

    }
   
    return 0;
}
 
