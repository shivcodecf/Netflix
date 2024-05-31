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

        string s;
        cin >>s;
        ll check=0;

        for(ll i=0;i<n;i++)
        {
            if(s[i]=='U')
            {
                check++;
            }
        }
        if(check&1)
        {
            cout <<"Yes"<<endl;
        }
        else {
            cout <<"No"<<endl;
        }

       

        
        
    }
   
    return 0;
}